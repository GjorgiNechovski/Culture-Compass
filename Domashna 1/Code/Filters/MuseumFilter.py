from Filters.Pipe import Pipe


class MuseumFilter(Pipe):
    def execute(self, input_data):
        fields = [""] * 9

        parts = input_data.split(",")

        if len(parts) >= 4:
            if parts[0] is not None and parts[1] is not None and parts[3] is not None:
                fields[2] = parts[0]
                fields[3] = parts[1]
                fields[0] = parts[3]

        if len(parts) >= 3 and parts[2] is not None:
            fields[1] = parts[2]

        if len(parts) >= 6 and parts[5] is not None:
            fields[4] = "true" if parts[5] == "yes" else "false"

        if len(parts) >= 7 and parts[6] is not None:
            fields[5] = parts[6]

        if len(parts) >= 9 and parts[8] is not None:
            fields[6] = parts[7]

        if len(parts) >= 9 and parts[8] is not None:
            fields[7] = parts[8]

        if len(parts) >= 10 and parts[9] is not None:
            fields[8] = parts[9]

        if len(parts) >= 11 and parts[10] is not None:
            fields[8] = parts[10]

        result = ",".join(fields).replace(",null", ",").rstrip(',')
        return result
