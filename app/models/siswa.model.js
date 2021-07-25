module.exports = (sequelize, Sequelize) => {
  const Siswa = sequelize.define("siswa", {
    nama: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    isActive: {
      type: Sequelize.BOOLEAN
    }
  });

  return Siswa;
};
