// Function to handle data type while sending
// Handle each endpoint in a single if else condition
// Not doing so might result on data conversion issue.
export const handleSendData = async data => async getState => {
	const { endpoint } = getState();
	// Check if some value exists in the given post data and handle their data type to send
	// >> setState: dataToSend

	// Check if the endpoint is contacts and has emails field
	// This needs to be done on the top as free-busy also has emails field
	if (data !== null) {
		// Convert given data into an array
		const arrayOfDatas = await Object.keys(data);
		// Check if the endpoint is contacts and has emails field
		// This needs to be done on the top as free-busy also has emails field

		if (
			(endpoint === 'contacts' && arrayOfDatas.includes('email')) ||
			(endpoint === 'contacts' && arrayOfDatas.includes('type'))
		) {
			const { email, type } = data;
			const dataToSend = { ...data, emails: [{ email: email, type: type }] };
			return dataToSend;
		}

		// Check if the data contains to field and convert into to:[{}] /send
		else if (arrayOfDatas.includes('to')) {
			const { to } = data;
			const dataToSend = { ...data, to: [{ email: to }] };
			return dataToSend;
		}

		// Check if data contains emails field free/busy
		else if (arrayOfDatas.includes('emails')) {
			const { emails } = data;
			const dataToSend = { ...data, emails: [emails] };
			return dataToSend;
		}

		// Check if data contains participants field /events
		else if (
			arrayOfDatas.includes('participants') ||
			arrayOfDatas.includes('when_unix_timestamp')
		) {
			const { participants, when_unix_timestamp } = data;
			const dataToSend = {
				...data,
				participants: [{ email: participants }],
				when: { time: when_unix_timestamp },
			};
			return dataToSend;
		} else {
			return data;
		}
	}
	// If none of above then setState to the same data
	else {
		return data;
	}
};
