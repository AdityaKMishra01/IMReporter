const express = require("express");
const {
  registerCrime,
  getAllCrimes,
  upload,
  updateCrime,
  deleteCrime,
} = require("../controllers/crime");
const router = express.Router();

router.post("/registercrime", upload.array("images", 5), registerCrime);
router.get("/getallcrimes", getAllCrimes);
router.put('/:id', updateCrime);
router.delete('/:id', deleteCrime);

module.exports = router;
