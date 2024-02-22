FROM mongo:7.0.5

WORKDIR /backup

CMD mkdir -p data/$(date +%Y-%m-%d_%H-%M-%S) && \
    mongodump --uri="mongodb://mongodb:27017/" --out=/backups/data/$(date +%Y-%m-%d_%H-%M-%S) && \
    echo "Backup completed" && exit 0
