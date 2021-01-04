module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-stock-trader/" // <== name of your GH repository
      : "/",
};
