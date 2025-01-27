import $api from "../http"

export default class NewsService{
    static viewPost(){
        return $api.get('/views/news')
    }
    static createPost(post){
        return $api.post('/views/createpost', {post})
    }
    static getZonesSlides(zone){
        return $api.post('/views/getzonesslides', zone)
    }
    static getCities(capter){
        return $api.post('/views/getcities', capter)
    }
    static getAllPacks(capter){
        return $api.post('/views/getallpacks', capter)
    }
    static getTrenersMan(zone){
        return $api.post('/views/gettrenersman', zone)
    }
    static getTrenersGroup(zone){
        return $api.post('/views/gettrenersgroup', zone)
    }

    static getGalleryImgs(capter){
        return $api.post('/views/getgalleryimgs', capter)
    }
}