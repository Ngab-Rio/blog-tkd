const components = [
  { name: "HC-SR04", category: "Sensor", description: "Sensor jarak ultrasonik untuk robot dan pengukur ketinggian air.", price: 15000, query: "HC-SR04 sensor ultrasonik", specs: ["5V", "Trig/Echo digital", "Jarak 2-400 cm"] },
  { name: "DHT11", category: "Sensor", description: "Sensor suhu dan kelembapan digital untuk pemantauan ruangan.", price: 14000, query: "DHT11 sensor suhu kelembapan", specs: ["3.3-5V", "Single-wire digital", "Suhu 0-50 C"] },
  { name: "ESP32 DevKit", category: "Mikrokontroler", description: "Board dengan Wi-Fi dan Bluetooth untuk proyek IoT.", price: 75000, query: "ESP32 DevKit", specs: ["Input 5V, GPIO 3.3V", "Wi-Fi + Bluetooth", "Dual-core, hingga 240 MHz"] },
  { name: "Arduino Uno R3", category: "Mikrokontroler", description: "Board belajar dengan pin digital dan analog yang mudah dipakai.", price: 95000, query: "Arduino Uno R3", specs: ["Input 7-12V", "USB, GPIO, I2C, UART", "ATmega328P, 16 MHz"] },
  { name: "Servo SG90", category: "Aktuator", description: "Motor kecil dengan kendali sudut 0 sampai 180 derajat.", price: 22000, query: "servo SG90", specs: ["4.8-6V", "PWM", "Sudut hingga 180 derajat"] },
  { name: "Modul Relay 5V", category: "Aktuator", description: "Saklar otomatis untuk mengendalikan lampu, kipas, atau pompa.", price: 12000, query: "modul relay 5V 1 channel", specs: ["5V", "Trigger digital", "Beban hingga 10A"] },
  { name: "LDR Module", category: "Sensor", description: "Sensor cahaya sederhana untuk lampu otomatis dan eksperimen analog.", price: 9000, query: "modul sensor cahaya LDR", specs: ["3.3-5V", "Analog atau digital", "Sensitivitas dapat diatur"] },
  { name: "Sensor Kelembapan Tanah", category: "Sensor", description: "Membaca kadar air media tanam untuk sistem penyiraman otomatis.", price: 18000, query: "sensor kelembapan tanah", specs: ["3.3-5V", "Analog", "Probe untuk media tanah"] },
  { name: "PIR HC-SR501", category: "Sensor", description: "Mendeteksi gerakan manusia untuk lampu, alarm, atau otomasi ruangan.", price: 18000, query: "PIR HC-SR501", specs: ["5V", "Output digital", "Jangkauan sekitar 7 m"] },
  { name: "NodeMCU ESP8266", category: "Mikrokontroler", description: "Board Wi-Fi ringkas dengan banyak contoh proyek IoT pemula.", price: 55000, query: "NodeMCU ESP8266", specs: ["Input 5V, GPIO 3.3V", "Wi-Fi 2.4 GHz", "CPU hingga 160 MHz"] },
  { name: "OLED 0.96 inch I2C", category: "Pendukung", description: "Layar kecil untuk menampilkan sensor, status koneksi, dan pesan sistem.", price: 32000, query: "OLED 0.96 I2C", specs: ["3.3-5V", "I2C, alamat 0x3C", "Resolusi 128x64"] },
  { name: "Buzzer Aktif 5V", category: "Aktuator", description: "Memberikan tanda suara untuk alarm atau notifikasi sederhana.", price: 5000, query: "buzzer aktif 5V", specs: ["3-5V", "Digital on/off", "Nada tetap saat aktif"] },
  { name: "Modul Wi-Fi ESP-01", category: "Komunikasi", description: "Modul komunikasi Wi-Fi untuk menghubungkan mikrokontroler ke jaringan.", price: 28000, query: "modul WiFi ESP-01", specs: ["3.3V", "UART", "Wi-Fi 2.4 GHz"] },
  { name: "Breadboard 830 titik", category: "Pendukung", description: "Papan prototipe tanpa solder untuk merangkai dan menguji sirkuit.", price: 18000, query: "breadboard 830 titik", specs: ["Sesuai rangkaian", "Terminal tanpa solder", "830 titik koneksi"] },
  { name: "Kabel Jumper Male-Female", category: "Pendukung", description: "Kabel penghubung pin board, sensor, dan breadboard saat prototyping.", price: 12000, query: "kabel jumper male female", specs: ["Sesuai rangkaian", "Male ke female", "Panjang sekitar 20 cm"] }
];

const catalog = document.querySelector("#catalog");
const search = document.querySelector("#search");
const category = document.querySelector("#category");

function formatPrice(price) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function categoryClass(category) {
  if (category === "Mikrokontroler") return "embedded";
  if (category === "Aktuator") return "iot";
  return "";
}

function componentImage(category) {
  const images = {
    Sensor: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    Mikrokontroler: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    Aktuator: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80",
    Komunikasi: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    Pendukung: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
  };
  return images[category];
}

function componentCard(component) {
  const searchUrl = `https://www.tokopedia.com/search?q=${encodeURIComponent(component.query)}`;
  return `<article class="card">
    <div class="visual component-visual ${categoryClass(component.category)}" style="background-image: url('${componentImage(component.category)}')">
      <span class="chip">${component.category}</span>
    </div>
    <div class="card-body">
      <span class="tag">${component.category}</span>
      <h2>${component.name}</h2>
      <p>${component.description}</p>
      <div class="component-specs">
        <span><b>Tegangan</b>${component.specs[0]}</span>
        <span><b>Antarmuka</b>${component.specs[1]}</span>
        <span><b>Detail</b>${component.specs[2]}</span>
      </div>
      <div class="buybox">
        <strong>${formatPrice(component.price)}</strong>
        <a class="btn buy" target="_blank" rel="noopener" href="${searchUrl}">Cari di Tokopedia</a>
      </div>
    </div>
  </article>`;
}

function renderCatalog() {
  const query = search.value.toLowerCase().trim();
  const filtered = components.filter((component) => {
    const content = `${component.name} ${component.category} ${component.description}`.toLowerCase();
    const matchesCategory = category.value === "Semua" || component.category === category.value;
    return matchesCategory && content.includes(query);
  });

  catalog.innerHTML = filtered.length
    ? filtered.map(componentCard).join("")
    : "<p>Komponen tidak ditemukan.</p>";
}

search.addEventListener("input", renderCatalog);
category.addEventListener("change", renderCatalog);
renderCatalog();
