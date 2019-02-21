import axios from 'axios'

const API_URL = 'http://localhost:8000/api/v1'

export function fetchAllCheques() {
	return axios.get(`${API_URL}/cheques`);
}

export function fetchCheque(chequeId) {
	return axios.get(`${API_URL}/cheques/${chequeId}`);
}

export function createCheque(cheque) {
	return axios.post(`${API_URL}/cheques`, {
        amount: cheque.amount,
        paymentDate: cheque.paymentDate,
        recipientName: cheque.recipientName
    });
}

export function updateCheque(chequeId) {
	return axios.patch(`${API_URL}/cheques/${chequeId}`);
}

export function destroyCheque(chequeId) {
	return axios.delete(`${API_URL}/cheques/${chequeId}`);
}