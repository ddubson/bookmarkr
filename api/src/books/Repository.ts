interface Repository<T> {
  fetchAll(): Array<T>;
}

export default Repository;