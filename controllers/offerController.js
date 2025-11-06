import Offer from '../models/Offer.js';

// GET all offers
export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch offers' });
  }
};

// POST new offer
export const addOffer = async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    await newOffer.save();
    res.json(newOffer);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to add offer' });
  }
};

// PUT update offer
export const updateOffer = async (req, res) => {
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOffer);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update offer' });
  }
};

// DELETE offer
export const deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete offer' });
  }
};
