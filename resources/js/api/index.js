import axios from 'axios'
/**
 * URL of the REST API to get the information.
 * It could be another completely separated service. 
 * In this case is the same project, served separately, 
 * written in php
 *
 * @var string
 */
const API_URL = 'http://localhost:8000/api/v1'

/**
 * Get all Cheques in JSON format
 *
 */
export function fetchCheques() {
	return axios.get(`${API_URL}/cheques`);
}

export function fetchChequesFromName(name) {
        return axios.get(`${API_URL}/cheques?filter[recipientName_eq]=${name}`);
}
/**
 * Get one particular Cheque in JSON format
 *
 */
export function fetchCheque(chequeId) {
	return axios.get(`${API_URL}/cheques/${chequeId}`);
}

/**
 * Create a Cheque
 *
 */
export function createCheque(cheque) {
	return axios.post(`${API_URL}/cheques`, {
        amount: cheque.amount,
        paymentDate: cheque.paymentDate,
        recipientName: cheque.recipientName
    });
}

/**
 * Update one specific Cheque
 *
 */
export function updateCheque(chequeId, cheque) {
	return axios.patch(`${API_URL}/cheques/${chequeId}`, {
        amount: cheque.amount,
        paymentDate: cheque.paymentDate,
        recipientName: cheque.recipientName
	});
}

/**
 * Delete a given Cheque
 *
 */
export function destroyCheque(chequeId) {
	return axios.delete(`${API_URL}/cheques/${chequeId}`);
}