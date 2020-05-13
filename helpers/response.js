const success = true;

module.exports = (data) => {
  try {
    return {
      status: success,
      data,
    };
  } catch (error) {
    console.log("tes");

    return { data: { error, status: success, statusCode: 400 } };
  }
};
