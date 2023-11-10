from Filters.Pipe import Pipe


class ArcheologyFilter(Pipe):
    def execute(self, input_data):
        fields = [""] * 9

        parts = input_data.split(",")

        fields[2] = parts[0]
        fields[3] = parts[1]
        fields[0] = parts[2]
        fields[1] = parts[3]
        fields[8] = parts[4]

        result = ",".join(fields).replace(",null", ",").rstrip(',')
        return result
