({
	post: [
		{
			$date_type: 'date',
			date: 'Monday, 02 April, 2018',
			$time_type: 'time',
			time: '12:00 AM',
			category: 'Template',
			title: 'Template',
			$date_value: '2018-04-02',
			$time_value: '00:00:00'
		}
	],
	body: [
		{
			$sub_body_type: 'textarea',
			sub_body: 'Template',
			$sub_image_type: 'image',
			sub_image: ''
		}
	],
	source: [
		{
			friendly_name: 'Template',
			url: 'Template'
		}
	]
})