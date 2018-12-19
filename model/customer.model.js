module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  nombretema: {
			type: Sequelize.STRING
	  },
	  descripciontema: {
			type: Sequelize.STRING
		},
		palabrauno: {
			type: Sequelize.STRING
		},
		palabrados: {
			type: Sequelize.STRING
		},
		palabratres: {
			type: Sequelize.STRING
		},
		palabracuatro: {
			type: Sequelize.STRING
	  }
	});
	
	return Customer;
}
