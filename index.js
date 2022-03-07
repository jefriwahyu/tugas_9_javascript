function laptop() {
  var rog = {
    type: 'ASUS ROG Zephyrus Duo (GX550)',
    cpu: 'Intel® Core™ i9-10980HK Processor 2.4 GHZ (16M Cache, up to 5.3 GHz)Intel® Core™ i7-10875H Processor 2.3 GHz (16M Cache, up to 5.1 GHz)',
    os: 'Windows 10',
    memori: '32GB 3200MHz DDR4 Memory',
    storage: '1TB + 1TB M.2 NVMe™ PCIe® 3.0 x4 SSD (HyperDrive/RAID 0)',
    display: '15.6″ (16:9) IPS 4K UHD (3840 x 2160), 400 nits, Adobe RGB 100%, Pantone® Validated, G-SYNC™ with 14.1-inch (3840 x 1100) touchscreen ROG ScreenPad Plus',
    graphics: '	NVIDIA® GeForce® RTX 2080 Super with ROG BoostNVIDIA® GeForce® RTX 2070 Super with ROG Boost',
    InputorOutput: '1 x USB 3.2 Gen 2 Type C with DisplayPort™ 1.4, Thunderbolt™ 3 and Power Delivery, 2 x USB 3.2 Gen 1 Type A, 1 x USB 3.2 Gen 2 Type A, 1 x HDMI 2.0b, 1 x 3.5mm Microphone-in jack, 1 x 3.5mm Microphone-in/Headphone-out jack, 1 x RJ45',
    camera: '1080p 60fps external webcam',
    connectivity: 'Wi-Fi 6 (802.11ax), Bluetooth 5.0',
    audio: '	2 x 4W speakers with Smart AMP technology, ESS, High-res certified, Array Microphone',
    battery: '90WHrs, 4S1P, 4-cell Li-ion',
    dimension: '36.0 x 26.8 x 2.09 ~ 2.09 cm',
    weight: '2,48Kg',
    warna: 'Gray',
    harga: 'Rp95.999.000 (Core i9, GeForce RTX 2080 Super)Rp71.999.000 (Core i7, GeForce RTX 2070 Super) ',
    garansi: '2 tahun garansi global'
  }
  for(var laptopasusrog in rog){
    console.log(rog[laptopasusrog])
  }
}

laptop();
