const NewsService = require('../services/news.service')
const {Files, Developers} = require('../models/models')
// const fs = require('fs');
// const FileDto = require('../dtos/fileDto')
const config = require('config')
const PATH = require('path')
// const DevelopersService = require("../services/developers.service");

class NewsController {
    async getNews(req, res, next) {
        try {
            const news = await NewsService.getNews()
            return res.status(200).json(news)
        } catch (e) {
            next(e)
        }
    }

    async createPost(req, res, next) {
        try {
            const post = req.body
            const news = await NewsService.createPost(post)
            return res.status(200).json(news)
        } catch (e) {
            next(e)
        }
    }
    async getZonesSlides(req, res, next) {
        try {
            const zone = req.body
            const itogy = await NewsService.getZonesSlides(zone)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getCities(req, res, next) {
        try {
            const capter = req.body
            const itogy = await NewsService.getCities(capter)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getAllPacks(req, res, next) {
        try {
            const capter = req.body
            const list = await NewsService.getAllPacks(capter)
            return res.status(200).json(list)
        } catch (e) {
            next(e)
        }
    }
    async getTrenersMan(req, res, next) {
        try {
            const group = req.body
            const itogy = await NewsService.getTrenersMan(group)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getTrenersGroup(req, res, next) {
        try {
            const group = req.body
            const itogy = await NewsService.getTrenersGroup(group)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }

    async getGalleryImgs(req, res, next) {
        try {
            const capter = req.body
            const itogy = await NewsService.getGalleryImgs(capter)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }


}

module.exports = new NewsController()