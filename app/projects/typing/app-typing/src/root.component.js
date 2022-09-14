import React, { useState, useRef, useEffect } from 'react'
import Parcel from 'single-spa-react/parcel';
import { random, allowedKeys } from './Helper'
import ReactTooltip from 'react-tooltip';
import ItemList from './components/ItemList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.component.scss'

let interval = null

const Root = () => {
	const parcelProps = {
		title: 'Game Digitação'
	}
	const inputRef = useRef(null)
	const outputRef = useRef(null)
	const [duration, setDuration] = useState(0)
	const [words, setWords] = useState(0)
	const [started, setStarted] = useState(false)
	const [ended, setEnded] = useState(false)
	const [index, setIndex] = useState(0)
	const [allIndex, setAllIndex] = useState(0)
	const [correctIndex, setCorrectIndex] = useState(0)
	const [errorIndex, setErrorIndex] = useState(0)
	const [quote, setQuote] = useState({})
	const [input, setInput] = useState('')
	const [cpm, setCpm] = useState(0)
	const [wpm, setWpm] = useState(0)
	const [accuracy, setAccuracy] = useState(0)
	const [isError, setIsError] = useState(false)
	const [lastScore, setLastScore] = useState('0')

	useEffect(async () => {
		const newQuote = await random();
		setQuote(newQuote)
		setInput(newQuote.quote)
	}, [])

	const handleEnd = () => {
		setEnded(true)
		setStarted(false)
		clearInterval(interval)
	}

	const setTimer = () => {
		const now = Date.now()
		const seconds = now + duration * 1000
		interval = setInterval(() => {
			const secondLeft = Math.round((seconds - Date.now()) / 1000) * -1;
			setDuration(secondLeft)
			if (secondLeft === 60000) {
				handleEnd()
			}
		}, 1000)
	}

	const handleStart = () => {
		setStarted(true)
		setEnded(false)
		setInput(quote.quote)
		inputRef.current.focus()
		setTimer()
	}

	const handleKeyDown = e => {
		const quoteText = quote.quote
		if (e.keyCode === 27) {
			handleEnd();
		} else {
			e.preventDefault()
			const { key } = e
			if (key === quoteText.charAt(index)) {
				setIndex(index + 1);
				setAllIndex(allIndex + 1);
				const currenChar = quoteText.substring(index + 1, index + quoteText.length)
				setInput(currenChar)
				setCorrectIndex(correctIndex + 1)
				setIsError(false)
				outputRef.current.innerHTML += key;
			} else {
				if (allowedKeys.includes(key)) {
					setErrorIndex(errorIndex + 1)
					setIsError(true)
					outputRef.current.innerHTML += `<span class="text-danger">${key}</span>`
				}
			}
		}

		const timeRemains = (duration / 60).toFixed(1);
		const _accuracy = Math.floor((allIndex - errorIndex) / allIndex * 100);
		const _cpm = Math.round(correctIndex / timeRemains);
		const _wpm = Math.round(words / timeRemains);

		if (words >= 1) {
			setAccuracy(_accuracy)
			setCpm(_cpm)
			setWpm(_wpm)
		}

		if (index + 1 === quoteText.length || errorIndex > 50) {
			nextWord()
		}
	}

	const nextWord = async () => {
		outputRef.current.innerHTML += ' - ';
		const newQuote = await random();
		setQuote(newQuote);
		setInput(newQuote.quote);
		setWords(words + 1);
		setIndex(0);
	}

	const endButton = () => {
		handleKeyDown({ keyCode: 27 });
	}

	useEffect(
		() => {
			if (ended) localStorage.setItem('wpm', wpm)
		},
		[ended, wpm]
	)
	useEffect(() => {
		const stroedScore = localStorage.getItem('wpm')
		if (stroedScore) setLastScore(stroedScore)
	}, [])

	return (
		<div className="app-typing">
			<Parcel config={(() => System.import('@central-app/parcel-header'))} parcelProps={parcelProps} />
			<div className="container-fluid pt-4">
				<div className="row">
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ReactTooltip id="WPM" type="info" effect="solid">
							<span>Word Per Minute (WPM) é medido calculando quantas palavras você pode digitar em 1 minuto.</span>
						</ReactTooltip>
						<ItemList
							data-tip data-for="WPM"
							name="WPM"
							data={wpm}
							style={
								wpm > 0 && wpm < 20 ? (
									{ color: 'white', backgroundColor: '#eb4841' }
								) : wpm >= 20 && wpm < 40 ? (
									{ color: 'white', backgroundColor: '#f48847' }
								) : wpm >= 40 && wpm < 60 ? (
									{ color: 'white', backgroundColor: '#ffc84a' }
								) : wpm >= 60 && wpm < 80 ? (
									{ color: 'white', backgroundColor: '#a6c34c' }
								) : wpm >= 80 ? (
									{ color: 'white', backgroundColor: '#4ec04e' }
								) : (
									{}
								)
							}
						/>
					</div>
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ReactTooltip id="CPM" type="info" effect="solid">
							<span>Character Per Minute (WPM) calcula quantos caracteres são digitados por minuto.</span>
						</ReactTooltip>
						<ItemList data-tip data-for="CPM" name="CPM" data={cpm} />
					</div>
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ItemList name="Ultimo Socre" data={lastScore} />
					</div>
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ItemList name="Tempo" data={duration} />
					</div>
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ItemList name="Erros" data={errorIndex} />
					</div>
					<div className='col-sm-6 col-md-4 col-lg-2'>
						<ItemList name="Precisão" data={accuracy} symble="%" />
					</div>
					{/* Body */}
					<div className="col-12">
						<div className="container">
							<div className="text-center mt-4 header">
								<h1>Quão rápido você consegue digitar ?</h1>

								<div className="alert alert-danger" role="alert">
									Basta começar a digitar e não usar <b>apagar</b> para corrigir seus erros. Seus erros serão marcados na cor <u>Vermelha</u> mostrado abaixo da caixa de escrita. Bom sorte!
								</div>

								<div className="control my-5">
									{ended ? (
										<button className="btn btn-circle btn-outline-danger" onClick={() => window.location.reload()}>
											Recomeçar
										</button>
									) : started ? (
										<button className="btn btn-circle btn-outline-info" onClick={endButton}>
											Parar
										</button>
									) : (
										<button className="btn btn-circle btn-outline-success" onClick={handleStart}>
											Iniciar!
										</button>
									)}
									<span className="btn-circle-animation" />
								</div>
							</div>

							{ended ? (
								<div className="bg-dark text-light p-4 mt-5 lead rounded">
									<span>"{quote.quote}"</span>
								</div>
							) : started ? (
								<div
									className={`text-light mono quotes${started ? ' active' : ''}${isError
										? ' is-error'
										: ''}`}
									tabIndex="0"
									onKeyDown={handleKeyDown}
									ref={inputRef}
								>
									{input}
								</div>
							) : (
								<div className="mono quotes text-muted" tabIndex="-1" ref={inputRef}>
									{input}
								</div>
							)}

							<div className="p-4 mt-4 bg-dark text-light rounded lead" ref={outputRef} />
							<hr className="my-4" />
							<div className="mb-5">
								<h6 className="py-2">Velocidade média de digitação</h6>
								<div className="d-flex text-white meter-gauge">
									<span style={{ background: '#eb4841' }}>
										0 - 20 Lento
									</span>
									<span style={{ background: '#f48847' }}>
										20 - 40 Média
									</span>
									<span style={{ background: '#ffc84a' }}>
										40 - 60 Rápido
									</span>
									<span style={{ background: '#a6c34c' }}>
										60 - 80 Profissional
									</span>
									<span style={{ background: '#4ec04e' }}>
										80 - 100+ Top
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Root
