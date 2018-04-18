export function normalizeEmployees(response) {
  return response.map(data => {
    const employee = data || {};
    return {
      id: employee.id,
      name: employee.name || '',
    };
  });
}
