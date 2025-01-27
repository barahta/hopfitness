const {Router} = require('express')
const router = Router()
const NewsController = require('../controllers/views.controller')
const authMiddlewere = require("../middlewere/auth.middlewere");
const SkillController = require("../controllers/skill.controller");

router.get('/news',NewsController.getNews)
router.post('/createpost',authMiddlewere,NewsController.createPost)
router.post('/getzonesslides',NewsController.getZonesSlides)
router.post('/getcities',NewsController.getCities)
router.post('/getallpacks',NewsController.getAllPacks)
router.post('/gettrenersman',NewsController.getTrenersMan)
router.post('/gettrenersgroup',NewsController.getTrenersGroup)
router.post('/getgalleryimgs',NewsController.getGalleryImgs)

module.exports = router