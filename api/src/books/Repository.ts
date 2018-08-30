interface Repository<T> {
  fetchAll(): T[];

  findById(id: number): T;
}

export default Repository;
