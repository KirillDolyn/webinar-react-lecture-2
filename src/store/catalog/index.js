import StoreModule from "../module";

class CatalogStore extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load() {
    const response = await fetch("/api/v1/articles?limit=50&skip=0");
    const json = await response.json();
    this.setState({
      items: json.result.items,
    });
  }
}

export default CatalogStore;
