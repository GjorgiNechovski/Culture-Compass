import Filters.MuseumFilter;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class Main {

    public static void main(String[] args) throws IOException {
        File inputFile = new File("C:\\Users\\gjorg\\OneDrive\\Desktop\\University\\petti semestar\\dians\\Proekt\\Domashna 1\\src\\main\\resources\\museumsMessy.csv");
        File outputFile = new File("C:\\Users\\gjorg\\OneDrive\\Desktop\\University\\petti semestar\\dians\\Proekt\\Domashna 1\\src\\main\\resources\\museums.csv");

        FileInputStream fileInputStream = new FileInputStream(inputFile);
        InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream);
        BufferedReader reader = new BufferedReader(inputStreamReader);

        Pipe<String> pipe = new Pipe<>();
        MuseumFilter museumFilter = new MuseumFilter();

        pipe.addFilter(museumFilter);

        reader.readLine();

        FileWriter fileWriter = new FileWriter(outputFile);
        BufferedWriter writer = new BufferedWriter(fileWriter);

        String string;
        while ((string = reader.readLine()) != null) {
            String filteredData = pipe.runFilters(string);
            writer.write(filteredData);
            writer.newLine();
        }

        reader.close();
        inputStreamReader.close();
        fileInputStream.close();
        writer.close();
        fileWriter.close();
    }
}
