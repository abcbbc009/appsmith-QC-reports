export default {
  async cleanslate() {
    // Reset select widgets
    await resetWidget('sel_batch', true);
    await resetWidget('sel_party', true);
    await resetWidget('sel_item', true);

    // Reset table widgets
    await resetWidget('tb_qc', true);
    await resetWidget('tb_timeln', true);
    await resetWidget('tb_main', true);
  },
	
	currentTime: "",  // Variable to hold the time string

	startClock() {
		// Function to update the time every second
		const updateTime = () => {
			const now = new Date();
			let dt = now.toDateString();
			let hours = now.getHours();
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const seconds = now.getSeconds().toString().padStart(2, '0');
			const ampm = hours >= 12 ? 'PM' : 'AM';
			hours = hours % 12 || 12;
			this.currentTime = `${dt} ${hours}:${minutes}:${seconds} ${ampm}`;
		};

		updateTime();  // Initial update
		setInterval(updateTime, 1000);  // Update every 1 second
	}


}