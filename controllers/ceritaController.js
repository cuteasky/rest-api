import Cerita from '../models/Cerita.js';

export const getCeritas = async (req, res) => {
  try {
    const ceritas = await Cerita.find();
    res.send(ceritas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCerita = async (req, res) => {
  try {
    const cerita = await Cerita.findById(req.params.id);
    res.json(cerita);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveCerita = async (req, res) => {
  const cerita = new Cerita(req.body);

  try {
    const savedCerita = await cerita.save();
    res.status(201).json(savedCerita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCerita = async (req, res) => {
  const checkId = await Cerita.findById(req.params.id);
  if (!checkId)
    return res.status(404).json({ message: 'Data tidak ditemukan..!' });
  try {
    const updatedCerita = await Cerita.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedCerita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCerita = async (req, res) => {
  const checkId = await Cerita.findById(req.params.id);
  if (!checkId)
    return res.status(404).json({ message: 'Data tidak ditemukan..!' });
  try {
    const deletedCerita = await Cerita.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedCerita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
