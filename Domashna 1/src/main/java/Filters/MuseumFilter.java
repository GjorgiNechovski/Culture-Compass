package Filters;

public class MuseumFilter implements Filter<String> {

    @Override
    public String execute(String input) {
        String[] fields = new String[9];

        String[] parts = input.split(",");

        if (parts.length >= 4) {
            if (parts[0] != null && parts[1] != null && parts[3] != null) {
                fields[2] = parts[0];
                fields[3] = parts[1];
                fields[0] = parts[3];
            }
        }

        if (parts.length >= 3 && parts[2] != null) {
            fields[1] = parts[2];
        }

        if (parts.length >= 6 && parts[5] != null) {
            fields[4] = parts[5].equals("yes") ? "true" : "false";
        }

        if (parts.length >= 7 && parts[6] != null) {
            fields[5] = parts[6];
        }
        if (parts.length >= 9 && parts[8] != null) {
            fields[6] = parts[7];
        }

        if (parts.length >= 9 && parts[8] != null) {
            fields[7] = parts[8];
        }

        if (parts.length >= 10 && parts[9] != null) {
            fields[8] = parts[9];
        }

        if (parts.length >= 11 && parts[10] != null) {
            fields[8] = parts[10];
        }

        return String.join(",", fields)
                .replace(",null", ",")
                .replaceAll(",$", "");
    }
}
