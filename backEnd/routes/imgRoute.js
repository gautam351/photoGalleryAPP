 const express=require("express");

const { getAllImages,createGalleryItem, getSingleGalleryItem, deleteGalleryItem, updateGalleryItem } = require("../controllers/imgController");
 
 const router=express.Router();
 
router.route("/").get(getAllImages);
router.route("/show/:id").get(getSingleGalleryItem);
router.route("/").post(createGalleryItem);
router.route("/:id/edit").put(updateGalleryItem);
router.route("/delete/:id").delete(deleteGalleryItem);
 module.exports=router