const saveChatbotInput = (req, res, next) => {
  const fakeReq = {
    body: {
      email: 'johncena@gmail.com',
      customProperties: {
        service_type: ['Videography'],
        staff_count: ['3'],
        service_time: ['5'],
      }
    }
  }

  res.json({ statusDescription: "Data acquired successfully!"});
};

module.exports = {
  saveChatbotInput
}
