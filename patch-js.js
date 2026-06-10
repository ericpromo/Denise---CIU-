const fs = require('fs');
const p = 'src/index.css';
let s = fs.readFileSync(p, 'utf8');
const find = `/* Botones con color de Acento */
.btn-acento {
  background-color: var(--color-acento);
  color: white;
  border: none;
}

.btn-acento:hover {
  background-color: var(--color-acento-hover);
  color: white;
}
`;
const rep = `/* Botones con color de Acento */
.btn-acento,
.btn-primary {
  background-color: var(--color-acento) !important;
  color: white !important;
  border-color: transparent !important;
}

.btn-acento:hover,
.btn-primary:hover {
  background-color: var(--color-acento-hover) !important;
  color: white !important;
}

.btn-acento {
  border: none;
}

.table-theme tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.08);
}

html.dark-mode .table-theme tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.03);
}

.table-theme tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

html.dark-mode .table-theme tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
`;
if (!s.includes(find)) {
  console.error('pattern not found');
  process.exit(1);
}
fs.writeFileSync(p, s.replace(find, rep), 'utf8');
