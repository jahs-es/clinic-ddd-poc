const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const customer_backend = [
  ...common,
  'tests/apps/customer/backend/features/**/*.feature',
  '--require tests/apps/customer/backend/features/step_definitions/*.steps.ts'
].join(' ');

const backoffice_backend = [
  ...common,
  'tests/apps/backoffice/backend/features/**/*.feature',
  '--require tests/apps/backoffice/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  customer_backend,
  backoffice_backend
};
