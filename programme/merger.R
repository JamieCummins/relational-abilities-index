df <- paste0("/Users/jamiecummins/git/corporate-consulting/Dylan/trials/",
             list.files("/Users/jamiecummins/git/corporate-consulting/Dylan/trials", 
                    pattern = "*.csv")) %>%
  map_df(~read_csv(., col_types = cols(.default = col_character()))) %>%
  mutate(across(everything(), ~replace_na(.x, "")),
         block = as.numeric(block)) |>
  arrange(block) |>
  write_csv("/Users/jamiecummins/git/corporate-consulting/Dylan/trials/merged_with_attention_checks.csv")




