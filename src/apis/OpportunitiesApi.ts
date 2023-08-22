
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Opportunity {
  id: number;
  name: string;
  status: string;
  // Add other fields as per the OpportunityDetails schema
}

export interface OpportunityResponse {
  success: boolean;
  errorMessage?: string;
  opportunities?: Opportunity[];
}

export async function getOpportunities(): Promise<OpportunityResponse> {
  try {
    const response = await axios.get<OpportunityResponse>(`${BASE_URL}/opportunities`);
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    return { success: false, errorMessage: 'Failed to fetch opportunities' };
  }
}

export async function createOpportunity(opportunity: Opportunity): Promise<OpportunityResponse> {
  try {
    const response = await axios.post<OpportunityResponse>(`${BASE_URL}/opportunities`, opportunity);
    return response.data;
  } catch (error) {
    console.error('Error creating opportunity:', error);
    return { success: false, errorMessage: 'Failed to create opportunity' };
  }
}

export async function updateOpportunity(opportunity: Opportunity): Promise<OpportunityResponse> {
  try {
    const response = await axios.put<OpportunityResponse>(`${BASE_URL}/opportunities/${opportunity.id}`, opportunity);
    return response.data;
  } catch (error) {
    console.error('Error updating opportunity:', error);
    return { success: false, errorMessage: 'Failed to update opportunity' };
  }
}

export async function deleteOpportunity(opportunityId: number): Promise<OpportunityResponse> {
  try {
    const response = await axios.delete<OpportunityResponse>(`${BASE_URL}/opportunities/${opportunityId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting opportunity:', error);
    return { success: false, errorMessage: 'Failed to delete opportunity' };
  }
}