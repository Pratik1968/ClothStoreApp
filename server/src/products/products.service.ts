import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const products = [
  {
    id: '1',
    imageUrl: 'hoodie1.png',
    title: 'Bright Pink Hoodie',
    brand: 'Comfort Basics',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['S', 'M', 'L', 'XL'],
    price: '$45',
  },
  {
    id: '2',
    imageUrl: 'hoodie2.png',
    title: 'Kelly Green Hoodie',
    brand: 'Urban Comfort',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['M', 'L', 'XL'],
    price: '$45',
  },
  {
    id: '3',
    imageUrl: '1.png',
    title: 'Floral Hawaiian Shirt',
    brand: 'Tropical Vibes',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['S', 'M', 'L', 'XL'],
    price: '$35',
  },
  {
    id: '4',
    imageUrl: '2.png',
    title: 'Black Leather Jacket',
    brand: "Biker's Hub",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['M', 'L', 'XL'],
    price: '$120',
  },
  {
    id: '5',
    imageUrl: 'jeans 2.png',
    title: 'Faded Slim Fit Jeans',
    brand: 'Denim Co.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['30', '32', '34', '36'],
    price: '$55',
  },
  {
    id: '6',
    imageUrl: 'Rectangle 3.png',
    title: 'Striped Wool Sweater Dress',
    brand: 'Cozy Knit',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    size: ['S', 'M', 'L'],
    price: '$60',
  },
];

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(searchText: string) {
    if (searchText) {
      console.log('search', searchText);
      const result = products.filter(
        (value) =>
          value.title.includes(searchText) || value.brand.includes(searchText),
      );
      console.log(result);
      return result;
    }
    return products;
  }

  findOne(id: string) {
    return products.find((products) => products.id == id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
