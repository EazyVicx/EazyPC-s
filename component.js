const components = {
        cpu: [
            { id: 'cpu-intel-i9-14900k', name: 'Intel Core i9-14900K', price: 428.99, socket: 'LGA1700', generation: '14th Gen', cores: 24, threads: 32, tdp: 125, integratedGraphics: true },
            { id: 'cpu-intel-i9-14900kf', name: 'Intel Core i9-14900KF', price: 529.95, socket: 'LGA1700', generation: '14th Gen', cores: 24, threads: 32, tdp: 125, integratedGraphics: false },
            { id: 'cpu-intel-i7-14700k', name: 'Intel Core i7-14700K', price: 308.99, socket: 'LGA1700', generation: '14th Gen', cores: 20, threads: 28, tdp: 125, integratedGraphics: true },
            { id: 'cpu-intel-i7-14700kf', name: 'Intel Core i7-14700KF', price: 313.57, socket: 'LGA1700', generation: '14th Gen', cores: 20, threads: 28, tdp: 125, integratedGraphics: false },
            { id: 'cpu-intel-i5-14600k', name: 'Intel Core i5-14600K', price: 194.00, socket: 'LGA1700', generation: '14th Gen', cores: 14, threads: 20, tdp: 125, integratedGraphics: true },
            { id: 'cpu-intel-i5-14600kf', name: 'Intel Core i5-14600KF', price: 198.22, socket: 'LGA1700', generation: '14th Gen', cores: 14, threads: 20, tdp: 125, integratedGraphics: false },
            { id: 'cpu-amd-ryzen-9-7950x3d', name: 'AMD Ryzen 9 7950X3D', price: 689.99, socket: 'AM5', generation: 'Zen 4', cores: 16, threads: 32, tdp: 120, integratedGraphics: false },
            { id: 'cpu-amd-ryzen-7-7800x3d', name: 'AMD Ryzen 7 7800X3D', price: 369.99, socket: 'AM5', generation: 'Zen 4', cores: 8, threads: 16, tdp: 120, integratedGraphics: false },
            { id: 'cpu-amd-ryzen-5-7600x', name: 'AMD Ryzen 5 7600X', price: 249.99, socket: 'AM5', generation: 'Zen 4', cores: 6, threads: 12, tdp: 105, integratedGraphics: false }
        ],
        motherboard: [
            { id: 'mobo-asus-z790', name: 'Asus ROG Strix Z790-E Gaming WiFi II', price: 489.99, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' },
            { id: 'mobo-msi-z790', name: 'MSI MAG Z790 TOMAHAWK WIFI', price: 289.99, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' },
            { id: 'mobo-gigabyte-z790', name: 'Gigabyte Z790 AORUS ELITE AX', price: 259.99, socket: 'LGA1700', chipset: 'Z790', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' },
            { id: 'mobo-asus-x670e', name: 'Asus ROG Crosshair X670E Hero', price: 649.99, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' },
            { id: 'mobo-msi-x670e', name: 'MSI MPG X670E CARBON WIFI', price: 439.99, socket: 'AM5', chipset: 'X670E', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' },
            { id: 'mobo-gigabyte-b650', name: 'Gigabyte B650 AORUS ELITE AX', price: 219.99, socket: 'AM5', chipset: 'B650', formFactor: 'ATX', ramSlots: 4, maxRam: 128, ramType: 'DDR5' }
        ],
        ram: [
            { id: 'ram-ddr5-6000-cl30-32gb', name: 'G.Skill Trident Z5 RGB 32GB (2 x 16GB) DDR5-6000 CL30', price: 119.99, type: 'DDR5', capacityGB: 32, speedMHz: 6000, casLatency: 30, kit: 2 },
            { id: 'ram-ddr5-6400-cl32-32gb', name: 'Corsair Vengeance RGB 32GB (2 x 16GB) DDR5-6400 CL32', price: 129.99, type: 'DDR5', capacityGB: 32, speedMHz: 6400, casLatency: 32, kit: 2 },
            { id: 'ram-ddr5-7200-cl34-32gb', name: 'Kingston Fury Beast RGB 32GB (2 x 16GB) DDR5-7200 CL34', price: 169.99, type: 'DDR5', capacityGB: 32, speedMHz: 7200, casLatency: 34, kit: 2 },
            { id: 'ram-ddr5-6000-cl30-64gb', name: 'G.Skill Trident Z5 RGB 64GB (2 x 32GB) DDR5-6000 CL30', price: 219.99, type: 'DDR5', capacityGB: 64, speedMHz: 6000, casLatency: 30, kit: 2 }
        ],
        gpu: [
            { id: 'gpu-rtx5050', name: 'NVIDIA GeForce RTX 5050', price: 1599.99, chipset: 'RTX 5050', memoryGB: 24, memoryType: 'GDDR6X', tdp: 450 },
            { id: 'gpu-rtx5060', name: 'NVIDIA GeForce RTX 5060', price: 999.99, chipset: 'RTX 5060', memoryGB: 16, memoryType: 'GDDR6X', tdp: 320 },
            { id: 'gpu-rtx5060ti', name: 'NVIDIA GeForce RTX 5060 Ti', price: 599.99, chipset: 'RTX 5060 Ti', memoryGB: 12, memoryType: 'GDDR6X', tdp: 220 },
            { id: 'gpu-rx7900xtx', name: 'AMD Radeon RX 7900 XTX', price: 949.99, chipset: 'RX 7900 XTX', memoryGB: 24, memoryType: 'GDDR6', tdp: 355 },
            { id: 'gpu-rx7800xt', name: 'AMD Radeon RX 7800 XT', price: 499.99, chipset: 'RX 7800 XT', memoryGB: 16, memoryType: 'GDDR6', tdp: 263 }
        ],
        storage: [
            { id: 'ssd-samsung-990pro-1tb', name: 'Samsung 990 Pro 1TB NVMe PCIe 4.0 SSD', price: 109.99, type: 'NVMe SSD', capacityGB: 1000, interface: 'PCIe 4.0' },
            { id: 'ssd-samsung-990pro-2tb', name: 'Samsung 990 Pro 2TB NVMe PCIe 4.0 SSD', price: 189.99, type: 'NVMe SSD', capacityGB: 2000, interface: 'PCIe 4.0' },
            { id: 'ssd-western-digital-sn850x-1tb', name: 'Western Digital Black SN850X 1TB NVMe PCIe 4.0 SSD', price: 99.99, type: 'NVMe SSD', capacityGB: 1000, interface: 'PCIe 4.0' },
            { id: 'ssd-western-digital-sn850x-2tb', name: 'Western Digital Black SN850X 2TB NVMe PCIe 4.0 SSD', price: 169.99, type: 'NVMe SSD', capacityGB: 2000, interface: 'PCIe 4.0' },
            { id: 'hdd-seagate-barracuda-2tb', name: 'Seagate Barracuda Compute 2TB 3.5" 7200 RPM HDD', price: 64.99, type: 'HDD', capacityGB: 2000, interface: 'SATA III' }
        ],
        psu: [
            { id: 'psu-corsair-rm1000e', name: 'Corsair RM1000e (2023) 1000W 80+ Gold Fully Modular', price: 149.99, wattage: 1000, efficiency: '80+ Gold', modularity: 'Fully Modular' },
            { id: 'psu-seasonic-focus-gx-850', name: 'Seasonic FOCUS Plus Gold 850W 80+ Gold Fully Modular', price: 119.99, wattage: 850, efficiency: '80+ Gold', modularity: 'Fully Modular' },
            { id: 'psu-msi-mpg-a850g', name: 'MSI MPG A850G PCIE5 850W 80+ Gold Fully Modular', price: 109.99, wattage: 850, efficiency: '80+ Gold', modularity: 'Fully Modular' },
            { id: 'psu-thermaltake-toughpower-gf3-1200', name: 'Thermaltake Toughpower GF3 1200W 80+ Gold Fully Modular', price: 199.99, wattage: 1200, efficiency: '80+ Gold', modularity: 'Fully Modular' }
        ],
        case: [
            { id: 'case-lian-li-o11-dynamic-evo', name: 'Lian Li O11 Dynamic EVO (Black)', price: 179.99, formFactorSupport: ['ATX', 'Micro ATX', 'Mini ITX'], maxGPULength: 422, color: 'Black', type: 'Mid Tower' },
            { id: 'case-nzxt-h9-flow', name: 'NZXT H9 Flow (White)', price: 159.99, formFactorSupport: ['ATX', 'Micro ATX', 'Mini ITX'], maxGPULength: 435, color: 'White', type: 'Mid Tower' },
            { id: 'case-fractal-design-north', name: 'Fractal Design North (Charcoal Black)', price: 139.99, formFactorSupport: ['ATX', 'Micro ATX', 'Mini ITX'], maxGPULength: 355, color: 'Charcoal Black', type: 'Mid Tower' },
            { id: 'case-corsair-4000d-airflow', name: 'Corsair 4000D Airflow (Black)', price: 99.99, formFactorSupport: ['ATX', 'Micro ATX', 'Mini ITX'], maxGPULength: 360, color: 'Black', type: 'Mid Tower' }
        ]
    };
