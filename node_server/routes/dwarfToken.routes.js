const router = require('express').Router();
const dwarfTokenController = require('../controllers/dwarfToken.controller');

router.get('/:tokenId', dwarfTokenController.getDwarfByTokenId);

module.exports = { router };