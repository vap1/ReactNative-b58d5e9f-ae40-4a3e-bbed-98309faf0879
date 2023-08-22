
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export async function getEmployees(): Promise<Employee[]> {
  try {
    const response = await axios.get<Employee[]>(`${BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch employees');
  }
}

export async function createEmployee(employeeDetails: EmployeeDetails): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/employees`, employeeDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create employee');
  }
}

export async function updateEmployee(employeeId: number, employeeDetails: EmployeeDetails): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/employees/${employeeId}`, employeeDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update employee');
  }
}

export async function deleteEmployee(employeeId: number): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.delete<UserRegistrationResponse>(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete employee');
  }
}