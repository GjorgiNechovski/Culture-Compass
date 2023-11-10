import csv
from Filters.ArcheologyFilter import ArcheologyFilter
from Filters.MuseumFilter import MuseumFilter

museums_input_csv_file = 'resources/museumsMessy.csv'
archeology_input_csv_file = 'resources/archeologyMessy.csv'
output_csv_file = 'resources/data.csv'

museum_filter = MuseumFilter()
archeology_filter = ArcheologyFilter()
museums_filters = [museum_filter]
archeology_filters = [archeology_filter]

filter_pipelines = {
    museums_input_csv_file: museums_filters,
    archeology_input_csv_file: archeology_filters
}

with open(output_csv_file, 'w', newline='', encoding='utf-8') as output_file:
    csv_writer = csv.writer(output_file)
    header_written = False

    for input_csv_file, filters in filter_pipelines.items():
        encoding = 'utf-8'

        try:
            with open(input_csv_file, 'r', newline='', encoding=encoding) as input_file:
                csv_reader = csv.reader(input_file)
                header = next(csv_reader)

                if not header_written:
                    csv_writer.writerow(header)
                    header_written = True
                for row in csv_reader:
                    filtered_data = ','.join(row)
                    for filter_instance in filters:
                        filtered_data = filter_instance.execute(filtered_data)
                    filtered_row = filtered_data.split(',')
                    csv_writer.writerow(filtered_row)
        except UnicodeDecodeError:
            print(f"Unable to read the CSV file '{input_csv_file}' with 'utf-8' encoding.")

print(f"CSV file filtering complete. Filtered data written to '{output_csv_file}'.")
