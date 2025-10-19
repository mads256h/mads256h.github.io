{
  description = "Development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = {nixpkgs, ...}:
    let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
    in 
    {
      devShells.${system}.default = pkgs.mkShellNoCC {
        packages = with pkgs; [
          hugo
        ];
      };
    };
}
