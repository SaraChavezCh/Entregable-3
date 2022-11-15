const Categories = require("../models/categories.models");

class categoriesControllers{
    static async create(req, res){
        const { name } = req.body;
        try{
            const category = await Categories.create({name})
            res.status(201).json(category)

        }catch(error){
            console.log(error)
        }
    }
    static async getAll(req, res){
        try{
            const all = await Categories.findAll();
            res.status(200).json(all);

        }catch(error){
            console.log(error)
        }
    }
    static async update(req, res){
        const { category_id } = req.params; 
        const { name } = req.body;
        try{
            const category = await Categories.findByPk(category_id)
            if(category){
                category.name = name
            }
            category.save();
            res.status(202).json(category)
        }catch(error){
            console.log(error)

        }
    }
    static async delete (req, res){
        const { category_id } = req.params; 
       try {
        const category = await Categories.findByPk(category_id)
        if(category){
            category.destroy();
            res.sendStatus(202)
        }else{
            res.status(500).json({message:"Category not found"})
        }
       } catch (error) {
        console.log(error);
        
       }
    }

    }



module.exports = categoriesControllers;