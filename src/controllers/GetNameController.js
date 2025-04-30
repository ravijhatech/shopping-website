// import User from '../models/User';

// export const getUserNameById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('name');
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json({ name: user.name });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };
