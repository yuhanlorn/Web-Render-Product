export const NewCardComponent = (product) => {
  const {
    mainImage,
    name,
    price: { minPrice }
  } = product;
  return `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="p-8 rounded-t-lg h-[200px] w-auto object-cover" src="${
      mainImage || "../assets/placeholder-1.webp"
    }" alt="product image" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">${
          name || "No product title"
        }</h5>
    </a>
    <div class="flex items-center justify-between">
        <span class="text-1xl font-bold text-gray-900 dark:text-white">${
          minPrice || "Unavailable"
        } $</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
</div>
</div>
`;
};