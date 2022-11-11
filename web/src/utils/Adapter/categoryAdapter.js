class CategoryAdapter {
  constructor() {
    this.category = undefined;
  }

  setCategory(category) {
    this.category = category;
    return this;
  }
  convert() {
    let newCategory = {};
    newCategory.user = {
      firstName: this.category.firstName,
      lastName: this.category.lastName,
      id: this.category.id,
      email: this.category.email,
    };
    newCategory.categories = this.category.categories;
    this.category = newCategory;
    return this;
  }
  getCategory() {
    return this.category;
  }
}
export const categoryAdapter = new CategoryAdapter();
