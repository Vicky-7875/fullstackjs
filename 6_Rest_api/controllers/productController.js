import { Product } from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import Joi from "joi";
import { CustomErrorHandler } from "../services";

import productSchema from "../validators/productValidator";

//for store file in filesyetem server isde
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 }, //5mb
}).single("image");

const productController = {
  async store(req, res, next) {
    //for receiving data default feature is not here  using library  for image
    //multipart form data
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }

      const filePath = req.file.path;
      console.log(filePath);

      //validation

      const { error } = productSchema.validate(req.body);

      if (error) {
        //deleted the uploaded file
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });
        return next(error);
      }

      const { name, price, size } = req.body;
      let document;

      try {
        document = await Product.create({
          name,
          price,
          size,
          image: filePath,
        });
      } catch (err) {
        return next(err);
      }

      res.status(201).json({ document });
    });
  },

  async update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      //validation

      const { error } = productSchema.validate(req.body);

      if (error) {
        if (req.file) {
          //deleted the uploaded file
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }
        return next(error);
      }

      const { name, price, size } = req.body;
      let document;

      try {
        document = await Product.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            price,
            size,
            ...(req.file && { image: filePath }), //...spear operator
          },
          { new: true } //if you not passs you will get old data
        );
        console.log(document);
      } catch (err) {
        return next(err);
      }

      res.status(201).json({ document });
    });
  },

  async destroy(req, res, next) {
    try {
      const document = await Product.findOneAndRemove({ _id: req.params.id });
      if (!document) {
        return next(new Error("Noting to delete"));
      }
      //image delete
      // console.log(document);
      const imagePath = document._doc.image;
      console.log(imagePath);

      fs.unlink(`${appRoot}/${imagePath}`, (err) => {
        if (err) {
          return next(CustomErrorHandler.serverError());
        }
      });

      res.json(document);
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
  },

  async index(req, res, next) {
    let documents;
    //pagination
    //mongoose pagenaiton
    try {
      documents = await Product.find()
        .select(`-updatedAt -__v`)
        .sort({ _id: -1 }); //desedind orer;
      //   documents = await Product.find().select(`-updatedAt -__v`); //not wanted
      //   documents = await Product.find().select(`name`); //only get name

      //   getters  ,accessor
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }

    // console.log(documents);
    res.json(documents);
  },

  async show(req, res, next) {
    let document;
    try {
      document = await Product.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }
    res.json(document);
  },
};

export default productController;
