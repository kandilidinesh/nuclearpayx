import { Router } from 'express';

const router = Router();

//Health Check Endpoint
router.get('/', (req, res) => {
    res.status(200).send({
        status: 'OK',
        service: 'gateway',
        timestamp: new Date().toISOString,
    });
});

export default router;
