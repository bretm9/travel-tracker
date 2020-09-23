class TripsRepo {
  constructor(data) {
    this.data = data;
    this.instantiations = []
  }

  generateInstantiations(classType) {
    this.instantiations = this.data.map(element => {
      let newInstantiation = new classType(element);
      return newInstantiation;
    });
  }
}

export default TripsRepo;