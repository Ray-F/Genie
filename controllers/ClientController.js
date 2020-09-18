const getClients = async (req, res, next) => {
  const clients = [
    {
      name: "Apia Tuhoe",

      desc: "Wedding Photography",
      date: "21st of June, 2021",
      location: "Te Puke, Hamilton",
      terms: "Wedding, Western, Full day coverage",
      budgetEstimate: [1500, 2200],

      quoted: 2149
    },
    {
      name: "John Cena",

      desc: "Event Photography",
      date: "1st of Jan, 2021",
      location: "Spark Arena, Auckland",
      terms: "Event, Boxing, Ticketed Event",
      budgetEstimate: [5500, 8000],

      quoted: 6500
    },
    {
      name: "Kardeep Singh",

      desc: "Wedding Videography",
      date: "22nd of July, 2021",
      location: "Helensville, Auckland",
      terms: "Wedding, Half day, Video",
      budgetEstimate: [1000, 1500],

      quoted: 1500
    },
    {
      name: "Parker Brown",

      desc: "Wedding Photography",
      date: "10th of May, 2021",
      location: "Red Barn, Huntly",
      terms: "Wedding",
      budgetEstimate: [1500, 2200],

      quoted: 1999
    },
    {
      name: "Jennifer Akai",

      desc: "Music Video",
      date: "-",
      location: "Las Vegas",
      terms: "Music video, narrative, big budget",
      budgetEstimate: [10000, 15000],

      quoted: 12000
    }
  ];

  res.json(clients);
}

const getCurrentClients = async (req, res, next) => {
  const status = {

  };

  res.json(status);
}

module.exports = {
  getClients,
  getCurrentClients
}
