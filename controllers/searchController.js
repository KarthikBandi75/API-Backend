import axios from 'axios';
import Search from '../models/Search.js';

const performSearch = async (req, res, next) => 
{
  const { keyword } = req.body;
    if (!keyword) return next(new Error('Keyword is required'));

  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${keyword}&per_page=30`);
    const results = response.data.items; 

    const newSearch = new Search({ keyword, results });
    await newSearch.save();

    res.status(201).json({ message: 'Search performed and stored successfully' });
  } catch (err) {
    next(err);
  }
};

const getDashboardData = async (req, res, next) => {
  try {
    const searches = await Search.find().sort({ createdAt: -1 }).limit(10); 
    res.json(searches);
  } catch (err) {
    next(err);
  }
};

export { performSearch, getDashboardData };