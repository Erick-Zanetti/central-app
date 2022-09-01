import { ParcelConfig } from 'single-spa';
import Parcel from 'single-spa-react/parcel';
import { Grid } from '@mui/material';

import './root.component.scss'

export default function Root(props) {

  const parcelProps = {
    title: 'Central APP'
  }

  return <section>
    <Parcel config={(() => System.import('@central-app/parcel-header')) as ParcelConfig<{}>} parcelProps={parcelProps} />
    <div className="container-home">
      <Grid container item spacing={2}>
        <Grid item xs={12} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <p className='main-title'>Aplicação feita para demosntrar os conhecimentos de micro frontend e conchecimento em algumas das diversas linguagens de programação para web.</p>
          <p className='sub-title'>Esta aplicação contara com diversas pequenas aplicações que vão interagir uma com a outra.</p>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
      <br />
      <br />
      <Grid container item spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <div>
            <Parcel config={(() => System.import('@central-app/parcel-financial-management-card-home')) as ParcelConfig<{}>} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <div>
            <Parcel config={(() => System.import('@central-app/parcel-to-do-list-card-home')) as ParcelConfig<{}>} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <div>
            <Parcel config={(() => System.import('@central-app/parcel-portfolio-card-home')) as ParcelConfig<{}>} />
          </div>
        </Grid>
      </Grid>
    </div>
  </section >;
}
