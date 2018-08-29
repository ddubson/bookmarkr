interface Repository<T> {
  fetchAll(): Array<T>;

  findById(id: number): T;
}

export default Repository;