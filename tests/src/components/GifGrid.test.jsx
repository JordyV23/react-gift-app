const { render, screen } = require("@testing-library/react");
import { GiftGrid } from "../../../src/components/GiftGrid";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

jest.mock("../../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });

  const category = "One Punch";

  test("Debe de mostrar el loading inicialmente", () => {
    render(<GiftGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imagenes", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "http://localhost/saitama.jpg",
      },
      {
        id: "efg",
        title: "Goku",
        url: "http://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GiftGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
