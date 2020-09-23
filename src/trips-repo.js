class TripsRepo {
  constructor(data) {
    this.data = data;
    this.instantiations = []
  }

  generateInstantiations(ClassType) {
    this.instantiations = this.data.map(element => {
      let newInstantiation = new ClassType(element);
      return newInstantiation;
    });
  }
}

export default TripsRepo;