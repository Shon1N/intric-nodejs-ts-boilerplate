import { DemoDto } from "../dtos/demo-dto";

const data:DemoDto[] = <DemoDto[]>[
    {
      id: '1',
      name: 'Demo Item 1',
      description: 'Description for demo item 1',
      createdAt: new Date('2023-01-01'),
      updatedAt: null,
    },
    {
      id: '2',
      name: 'Demo Item 2',
      description: 'Description for demo item 2',
      createdAt: new Date('2023-02-01'),
      updatedAt: new Date('2023-02-02'),
    },
  ];

// Object containing the data and method
const demoService = {

  // Method to fetch data
  async GetAllAsync(): Promise<DemoDto[]> {
    // Simulating async delay (e.g., database or API call)
    return new Promise<DemoDto[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

};

// Exporting the demoDataService object with the method
export default demoService ;