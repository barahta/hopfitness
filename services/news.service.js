
const config = require('config')
const {News, Developers, ZonesSlider,ContactsPage,PacksKids,OurTrainers,GroupTrainers,GalleryImages} = require('../models/models')

class NewsService {
    async getNews(){
        try{
            const news = await News.findAll()
            console.log(news)
            return news
        }catch(e){
            console.log(e)
        }

    }

    async createPost(post){
        console.log(post)
        const name = post.post.name
        const desc = post.post.desc
        const text = post.post.text
        const image = post.post.image
        const publ = post.post.public
        try{
            const post = await News.create({title: name, desc: desc, image: image, public: publ, text: text })
            return post
        }catch(e){
            console.log(e)
        }


    }
    async getZonesSlides(capter){

        const com = capter.capter
        try{
            const places = await ZonesSlider.findAll({
                where: { capter: com },
                order: [['id', 'DESC']] // сортировка по возрастанию id
            });
            return places
        }catch(e){
            console.log(e)
        }
    }
    async getCities(capter){

        const com = capter.capter
        try{
            const places = await ContactsPage.findAll({
                where: { capter: com },
                order: [['id', 'ASC']] // сортировка по возрастанию id
            });
            console.log(places)
            return places
        }catch(e){
            console.log(e)
        }
    }
    async getAllPacks(com){
        const capter = com.capter
        try{
            const places = await PacksKids.findAll({
                where: { capter: capter },
                order: [['id', 'ASC']] // сортировка по возрастанию id
            });
            return places
        }catch(e){
            console.log(e)
        }
    }
    async getTrenersMan(capter){

        const com = capter.capter
        try{
            const places = await OurTrainers.findAll({
                where: { capter: com },
                order: [['id', 'DESC']] // сортировка по возрастанию id
            });
            return places
        }catch(e){
            console.log(e)
        }
    }
    async getTrenersGroup(capter){

        const com = capter.capter
        try{
            const places = await GroupTrainers.findAll({
                where: { capter: com },
                order: [['id', 'DESC']] // сортировка по возрастанию id
            });
            return places
        }catch(e){
            console.log(e)
        }
    }

    async getGalleryImgs(capter){

        console.log(capter)
        const com = capter.capter
        console.log(com)
        try{
            const places = await GalleryImages.findAll({
                where: { capter: com },
                order: [['id', 'ASC']] // сортировка по возрастанию id
            });
            return places
        }catch(e){
            console.log(e)
        }
    }

}
module.exports = new NewsService()
